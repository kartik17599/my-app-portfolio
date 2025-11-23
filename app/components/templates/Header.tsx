import { Container, Tab, Toolbar } from "@mui/material";
import React from "react";
import { TypographyAtom } from "../atoms/TypographAtom";
import { DividerAtom } from "../atoms/DividerAtom";
import { AppBarAtom } from "../atoms/AppBarAtom";

export const Header: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <AppBarAtom
          position="static"
          color="transparent"
          sx={{ boxShadow: "none", marginTop: "20px" }}
        >
          <Toolbar variant="dense" sx={{ justifyContent: "left" }}>
            <TypographyAtom
              text="KARTIK KARANWAL"
              variant="h1"
              align="center"
              fontFamily="sans"
              fontSize="36px"/>
            <Tab label="Introduction" href="#introduction" />
            <Tab label="Skills" href="#skills" />
            <Tab label="Experience" href="#experience" />
            <Tab label="Certifications" href="#certifications" />
            <Tab label="Projects" href="#projects" />
            <Tab label="Contact" href="#contact" />
          </Toolbar>
        </AppBarAtom>
        <DividerAtom
          orientation="horizontal"
          borderRadius={24}
          borderBottomWidth={3}
          borderBottomColor="black"
        />
        <TypographyAtom
          text="Front-End Developer | Data Analyst | DevOps Engineer"
          variant="h4"
          align="center"
          fontFamily="sans"
          fontSize="20px"
        />
      </Container>
    </>
  );
};
