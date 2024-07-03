import React from "react";
import { isBold } from "/lib/parse-resume-from-pdf/extract-resume-from-sections/lib/common-features";
import { Badge, Heading, Link, Paragraph, Table } from "components/documentation";

export const ResumeParserAlgorithmArticle = ({
  textItems,
  lines,
  sections,
}) => {
  const getBadgeContent = (item) => {
    const X1 = Math.round(item.x);
    const X2 = Math.round(item.x + item.width);
    const Y = Math.round(item.y);
    let content = `X₁=${X1} X₂=${X2} Y=${Y}`;
    if (X1 === X2) {
      content = `X=${X2} Y=${Y}`;
    }
    if (isBold(item)) {
      content = `${content} Bold`;
    }
    if (item.hasEOL) {
      content = `${content} NewLine`;
    }
    return content;
  };

  const step1TextItemsTable = [
    ["#", "Text Content", "Metadata"],
    ...textItems.map((item, idx) => [
      idx + 1,
      item.text,
      <Badge key={idx}>{getBadgeContent(item)}</Badge>,
    ]),
  ];

  const step2LinesTable = [
    ["Lines", "Line Content"],
    ...lines.map((line, idx) => [
      idx + 1,
      line.map((item, idx) => (
        <span key={idx}>
          {item.text}
          {idx !== line.length - 1 && (
            <span className="select-none font-extrabold text-sky-400">
              &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
            </span>
          )}
        </span>
      )),
    ]),
  ];

  const { profile, profileScores } = extractProfile(sections);
  const Scores = ({ scores }) => {
    return (
      <>
        {scores
          .sort((a, b) => b.score - a.score)
          .map((item, idx) => (
            <span key={idx} className="break-all">
              <Badge>{item.score}</Badge> {item.text}
              <br />
            </span>
          ))}
      </>
    );
  };

  const step4ProfileFeatureScoresTable = [
    [
      "Resume Attribute",
      "Text (Highest Feature Score)",
      "Feature Scores of Other Texts",
    ],
    ["Name", profile.name, <Scores key={"Name"} scores={profileScores.name} />],
    [
      "Email",
      profile.email,
      <Scores key={"Email"} scores={profileScores.email} />,
    ],
    [
      "Phone",
      profile.phone,
      <Scores key={"Phone"} scores={profileScores.phone} />,
    ],
  ];

  return (
    <>
      <Heading level={2}>Step 1: Text Items</Heading>
      <Table table={step1TextItemsTable} />
      <Heading level={2}>Step 2: Lines</Heading>
      <Table table={step2LinesTable} />
      <Heading level={2}>Step 3: Sections</Heading>
      <Step3SectionsTable sections={sections} />
      <Heading level={2}>Step 4: Profile Feature Scores</Heading>
      <Table table={step4ProfileFeatureScoresTable} />
    </>
  );
};

const Step3SectionsTable = ({ sections }) => {
  const table = [
    ["Section Title", "Section Content"],
    ...Object.keys(sections).map((sectionTitle, idx) => [
      sectionTitle,
      sections[sectionTitle].map((line, idx) => (
        <p key={idx}>
          {line.map((item, idx) => (
            <span key={idx}>
              {item.text}
              {idx !== line.length - 1 && (
                <span className="select-none font-extrabold text-sky-400">
                  &nbsp;&nbsp;{"|"}&nbsp;&nbsp;
                </span>
              )}
            </span>
          ))}
        </p>
      )),
    ]),
  ];
  return <Table table={table} />;
};

const extractProfile = (sections) => {
  let profile = {};
  let profileScores = {};
  Object.keys(sections).forEach((sectionTitle) => {
    const section = sections[sectionTitle];
    section.forEach((line) => {
      line.forEach((item) => {
        const score = Math.random(); // Replace this with actual scoring logic
        if (item.text.includes("Name:")) {
          profile.name = item.text;
          profileScores.name = profileScores.name || [];
          profileScores.name.push({ text: item.text, score });
        } else if (item.text.includes("Email:")) {
          profile.email = item.text;
          profileScores.email = profileScores.email || [];
          profileScores.email.push({ text: item.text, score });
        } else if (item.text.includes("Phone:")) {
          profile.phone = item.text;
          profileScores.phone = profileScores.phone || [];
          profileScores.phone.push({ text: item.text, score });
        }
      });
    });
  });
  return { profile, profileScores };
};
