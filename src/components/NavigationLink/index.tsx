import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type NavigationLinkProps = PropsWithChildren<LinkProps>;

function NavigationLink(
  props: NavigationLinkProps
): React.ReactElement<NavigationLinkProps> {
  const { children, href } = props;
  const { asPath } = useRouter();
  const className =
    asPath === href
      ? "bg-blue-600 text-white"
      : "text-gray-700 hover:bg-gray-200 hover:text-black";
  return (
    <Link {...props}>
      <a className={"px-3 py-2 rounded-md text-sm font-medium " + className}>
        {children}
      </a>
    </Link>
  );
}

export default NavigationLink;
