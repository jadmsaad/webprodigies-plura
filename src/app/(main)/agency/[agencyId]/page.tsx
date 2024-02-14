import * as React from "react";

export interface IPageProps {
  params: {
    agencyId: string;
  };
}

const Page = ({ params }: IPageProps) => {
  return <div>{params.agencyId}</div>;
};

export default Page;
