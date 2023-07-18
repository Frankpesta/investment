import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();
  const notifySuccess = (message) => {
    return toast({
      position: "bottom-right",
      description: message,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const notifyError = (message) => {
    return toast({
      position: "bottom-right",
      description: message,
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };
  return { notifySuccess, notifyError };
};
