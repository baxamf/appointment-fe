import {
  InternalRefetchQueryDescriptor,
  useMutation,
  useQuery,
} from "@apollo/client";
import {
  GET_COMPANY_SERVICE_TAGS,
  CREATE_COMPANY_SERVICE_TAG,
  UPDATE_COMPANY_SERVICE_TAG,
  REMOVE_COMPANY_SERVICE_TAG,
} from "../graphql";
import { useParams } from "react-router-dom";
import { UpdateServiceTagInput } from "../../../../api/__generated__/graphql";

export function useCompanyServiceTagApi() {
  const { companyServiceId } = useParams();

  const tagsRefetch: InternalRefetchQueryDescriptor[] = [
    {
      query: GET_COMPANY_SERVICE_TAGS,
      variables: { companyServiceId: Number(companyServiceId) },
    },
  ];

  const {
    data,
    loading: tagsLoading,
    error: tagsError,
  } = useQuery(GET_COMPANY_SERVICE_TAGS, {
    variables: { companyServiceId: Number(companyServiceId) },
  });

  const [create] = useMutation(CREATE_COMPANY_SERVICE_TAG, {
    refetchQueries: tagsRefetch,
  });

  const [update] = useMutation(UPDATE_COMPANY_SERVICE_TAG, {
    refetchQueries: tagsRefetch,
  });

  const [remove] = useMutation(REMOVE_COMPANY_SERVICE_TAG);

  const createTag = async (title: string) => {
    await create({
      variables: {
        companyServiceId: Number(companyServiceId),
        createServiceTagInput: { title },
      },
    });
  };

  const updateTag = async (
    serviceTagId: number,
    updateServiceTagInput: UpdateServiceTagInput
  ) => {
    await update({
      variables: {
        serviceTagId,
        updateServiceTagInput,
      },
    });
  };

  const removeTag = async (serviceTagId: number) => {
    await remove({
      variables: { serviceTagId },
    });
  };

  return {
    tagHandlers: { createTag, updateTag, removeTag },
    tags: data?.getCompanyServiceTags,
    tagsLoading,
    tagsError,
  };
}
