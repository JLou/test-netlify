// Import React
import React from "react";
// Import Spectacle Core tags
import { Heading, List, ListItem, Slide } from "spectacle";

export default class ExistingSolutions extends React.Component {
  render() {
    return (
      <>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Existing Solutions
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deploying by hand
          </Heading>
          <List>
            <ListItem>Build locally</ListItem>
            <ListItem>Deploy via ftp (or something other tool)</ListItem>
            <ListItem>Time consuming &amp; error-prone</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Github Pages
          </Heading>
          <List>
            <ListItem>Build locally</ListItem>
            <ListItem>Deploy via ftp (or something other tool)</ListItem>
            <ListItem>Time consuming &amp; error-prone</ListItem>
          </List>
        </Slide>
      </>
    );
  }
}
