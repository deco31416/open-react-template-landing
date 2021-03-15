import React from "react";
import Button from "../../elements/Button";

export default function SixthSection({ t }) {
  return (
    <section className="section-padding-s" style={{ background: "#25282c" }}>
      <div className="fl-co-ce">
        <div className="text-align-center">
          <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
            {t("efficacy_section_6_header")}
          </h1>
        </div>
        <div>
          <Button tag="a" color="primary" wideMobile href="#">
            {t("efficacy_section_6_button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
