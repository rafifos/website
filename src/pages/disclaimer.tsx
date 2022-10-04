import type { GetServerSidePropsContext } from "next";

import { AppTemplate } from "@/templates";

async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const proto = req.headers["x-forwarded-proto"] ? "https" : "http";

  const favicon = await fetch(`${proto}://${req.headers.host}/favicon-attribution.txt`)
    .then((res) => res.text())
    .catch((err) => {
      if (err instanceof Error) console.error(err.message);
      console.error(err);
    });

  const libraries = await fetch(`${proto}://${req.headers.host}/DISCLAIMER`)
    .then((res) => res.text())
    .catch((err) => {
      if (err instanceof Error) console.error(err.message);
      console.error(err);
    });

  if (typeof libraries !== "string" && typeof favicon !== "string")
    return {
      notFound: true,
    };

  return {
    props: {
      favicon,
      libraries,
    },
  };
}

interface DisclaimerProps {
  favicon?: string;
  libraries?: string;
}

function Disclaimer({ favicon, libraries }: DisclaimerProps) {
  return (
    <AppTemplate>
      {typeof favicon === "string" && (
        <>
          <h2>favicon</h2>
          <code>{favicon}</code>
        </>
      )}

      {typeof libraries === "string" && (
        <>
          <h2>Atribuições para Softwares de Terceiros</h2>
          <code>{libraries}</code>
        </>
      )}
    </AppTemplate>
  );
}

export default Disclaimer;
export { getServerSideProps };
