import Modal from "components/Modal";
import { BASE_URL } from "constants/url";
import { PropsWithChildren, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyContent {
  url: string;
}

function CopyUrl({ url, children }: PropsWithChildren<CopyContent>) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1400);
  };

  return (
    <>
      <CopyToClipboard text={currentUrl(url)} onCopy={handleCopy}>
        {children}
      </CopyToClipboard>
      {isCopied && <Modal content="✔︎ 링크가 복사되었습니다" />}
    </>
  );
}

export default CopyUrl;

const currentUrl = (url: string) => {
  if (typeof window === "undefined") {
    return `${BASE_URL}${url}`;
  } else {
    const { host } = window.location;
    return `${host}${url}`;
  }
};
