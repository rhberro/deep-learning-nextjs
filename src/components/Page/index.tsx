import { PropsWithChildren } from "react";

type PageProps = PropsWithChildren<{}>;

function Page(props: PageProps): React.ReactElement {
  const { children } = props;
  return <div className="container mx-auto px-8">{children}</div>;
}

export default Page;
