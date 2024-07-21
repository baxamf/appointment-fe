import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Alert, Flex, Input, Tag, theme } from "antd";
import { useCompanyServiceTagApi } from "../hooks/useCompanyServiceTagApi";
import Loading from "../../../../common/components/loading/Loading";
import { useCompanyServiceTagControls } from "../hooks/useCompanyServiceTagControls";

export default function AdminServiceEditTags() {
  const { token } = theme.useToken();

  const { tagHandlers, tags, tagsLoading, tagsError } =
    useCompanyServiceTagApi();

  const { create, edit, deleteTag } = useCompanyServiceTagControls(tagHandlers);

  if (tagsLoading) return <Loading />;

  if (tagsError) return <Alert type="error" message={tagsError.message} />;

  if (tags)
    return (
      <Flex wrap gap="2vh">
        {tags.map<React.ReactNode>((tag) => {
          if (edit.inputTagId === tag.id) {
            return (
              <Input
                style={{ width: "max-content" }}
                ref={edit.ref}
                key={tag.id}
                value={edit.value}
                onChange={edit.change}
                onBlur={() => edit.confirm(tag.id)}
                onPressEnter={() => edit.confirm(tag.id)}
              />
            );
          }

          return (
            <Tag
              key={tag.id}
              closable={true}
              style={{ userSelect: "none", padding: "10px 20px" }}
              onClose={() => deleteTag(tag.id)}
            >
              <span
                onDoubleClick={(e) => {
                  edit.show(tag.id, tag.title);
                  e.preventDefault();
                }}
              >
                {tag.title}
              </span>
            </Tag>
          );
        })}

        {create.visible ? (
          <Input
            style={{ width: "max-content" }}
            ref={create.ref}
            value={create.value}
            onChange={create.change}
            onBlur={create.confirm}
            onPressEnter={create.confirm}
          />
        ) : (
          <Tag
            style={{
              padding: "10px 20px",
              background: token.colorBgContainer,
              borderStyle: "dashed",
            }}
            icon={<PlusOutlined />}
            onClick={create.show}
          >
            New Tag
          </Tag>
        )}
      </Flex>
    );
}
