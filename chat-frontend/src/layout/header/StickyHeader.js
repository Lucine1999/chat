import { Container, Grid } from "@mui/material";
import clsx from "clsx";
import Navbar from "./Navbar";
import { headerStyles } from "./styles";

function StickyHeader() {
  const classes = headerStyles();

  return (
    <div className={clsx(classes.headerParts, classes.stickyLine)}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Navbar />
        </Grid>
      </Container>
    </div>
  );
}

export default StickyHeader;
