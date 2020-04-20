import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Berkan Sivri" />
    <Section id="about" title="About Me">
      <p>
        I'm a motivated full-stack engineer who has experience building and
        scaling web applications and services in various domains.
      </p>
      <p>
        I'm also passionate about open source contributions, working in high
        impact environments with frequent deployments, and helping growing
        development teams build great products.
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="CLevel"
        link="https://clevel.team"
        desc="Frontend Developer, January 2020 - Present"
      />
      <Link
        title="Ready Technology Services"
        link="https://ready.com.tr"
        desc="Full-Stack Developer, December 2018 - January 2020"
      />
      <Link
        title="Doruk Automation and Software Inc."
        link="https://dorukotomasyon.com/"
        desc="Full-Stack Developer, February 2018 - December 2018"
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), React, Vue.js, Node.js, Express.js, C#, .Net Core, GraphQL, Go"
      />
      <Link title="Databases" desc="MSSQL, MongoDB" />
      <Link
        title="Other"
        desc="Git, Docker, Microservices, API design, Agile / Scrum, RabbitMQ"
      />
    </Section>
    <Section id="education" title="Education">
      <Link
        title="Computer Engineering (Bachelor)"
        desc="Girne American University"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="LeetCode"
        link="https://github.com/berkansivri"
        desc="Complex algorithm problems solutions, regularly (JavaScript)"
      />
      <Link
        title="RGRid"
        link="https://github.com/Sarpilhan/RGrid"
        desc="Datatable for Vue.js"
      />
      <Link
        title="TChat"
        link="https://github.com/berkansivri/TChat"
        desc="Vue SPA for Auto Translated (Yandex API) Chat via RabbitMQ"
      />
      <Link
        title="VsCode .njsproj"
        link="https://github.com/berkansivri/VsCode-njsproj"
        desc="VS Code Extension to Keep Your -.njsproj Files up-to-date Automatically (Node.js)"
      />
      <Link
        title="useMemory"
        link="https://github.com/berkansivri/useMemory"
        desc="Online, Real Time, Multiplayer Memory Game on React Hooks"
      />
      <Link
        title="Tic-Tac-Toe"
        link="https://github.com/berkansivri/Tic-Tac-Toe"
        desc="Singleplayer, AI Based Tic Tac Toe Game on Vue"
      />
      <Link
        title="React-Tic-Tac-Toe"
        link="https://github.com/berkansivri/Tic-Tac-Toe"
        desc="Multiplayer, XOX Game on React Hooks"
      />
      <Link
        title="Vue-Weather"
        link="https://github.com/berkansivri/Vue-Weather"
        desc="DarkSky Weather (GraphQL)  Implementation on Vue with Apollo Client"
      />
      <Link
        title="DarkSky-GraphQL"
        link="https://github.com/berkansivri/DarkSky-GraphQL"
        desc="Apollo - GraphQL Implementation of DarkSky Weather API"
      />
      <Link
        title="Monolith-Boilerplate-.NET"
        link="https://github.com/berkansivri/DarkSky-GraphQL"
        desc="Monolith Layered Architecture .NET Project (WebAPI, Dapper, Unit of Work, Postsharp, Autofac, SimpleInjector)"
      />
      <Link
        title="Trustpilot-Challenge"
        link="https://github.com/berkansivri/TrustPilot-Challenge"
        desc="My fast approach to Trustpilot Algorithm Challenge (JavaScript)"
      />
    </Section>
    <Section id="certifications" title="Certifications">
      <Link
        title="Microsoft MCP"
        link="https://www.youracclaim.com/badges/ab4fc56e-8390-497f-9faa-48d248a66c7d"
        desc="Programming in C#"
      />
      <Link
        title="Microsoft MCP"
        link="https://www.youracclaim.com/badges/eb7a9c9d-840c-4f6d-bce9-3aea80d6b54e"
        desc="Programming in HTML5 with JavaScript and CSS3"
      />
      <Link
        title="Codeweek Event Team Leader Certificate"
        desc="Girne American University Event"
      />
    </Section>
  </Layout>
);

export default IndexPage;
