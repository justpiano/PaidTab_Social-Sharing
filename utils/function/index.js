import { toast } from "react-toastify";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
  toast.success("Copied to Clipboard!");
};