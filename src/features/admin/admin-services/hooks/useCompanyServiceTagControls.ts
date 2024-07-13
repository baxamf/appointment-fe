import { InputRef } from "antd";
import { useEffect, useRef, useState } from "react";
import { UpdateServiceTagInput } from "../../../../api/__generated__/graphql";

type TagControlHandlers = {
  removeTag: (serviceTagId: number) => Promise<void>;
  createTag: (title: string) => Promise<void>;
  updateTag: (
    serviceTagId: number,
    updateServiceTagInput: UpdateServiceTagInput
  ) => Promise<void>;
};

export function useCompanyServiceTagControls({
  removeTag,
  createTag,
  updateTag,
}: TagControlHandlers) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputTagId, setEditInputTagId] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const deleteTag = (tagId: number) => {
    removeTag(tagId);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const showEditInput = (tagId: number, tagTitle: string) => {
    setEditInputTagId(tagId);
    setEditInputValue(tagTitle);
  };

  const hideInput = () => {
    setInputVisible(false);
    setInputValue("");
  };

  const hideEditInput = () => {
    setEditInputTagId(-1);
    setEditInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue) {
      createTag(inputValue);
    }

    hideInput();
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = (tagId: number) => {
    if (editInputValue) {
      updateTag(tagId, { title: editInputValue });
    }

    hideEditInput();
  };

  return {
    edit: {
      ref: editInputRef,
      inputTagId: editInputTagId,
      value: editInputValue,
      change: handleEditInputChange,
      confirm: handleEditInputConfirm,
      show: showEditInput,
      hide: hideEditInput,
    },
    create: {
      ref: inputRef,
      visible: inputVisible,
      value: inputValue,
      change: handleInputChange,
      confirm: handleInputConfirm,
      show: showInput,
      hide: hideInput,
    },
    deleteTag,
  };
}
