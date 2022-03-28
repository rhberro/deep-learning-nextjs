import NavigationLink from "../NavigationLink";

function PageHeader(): React.ReactElement {
  return (
    <header className="py-10">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">Soccer</div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/players">Players</NavigationLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
