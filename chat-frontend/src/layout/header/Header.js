import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import AccountLinks from "./AccountLinks";
import HeaderMobileDrawer from "./HeaderMobileDrawer";
import StickyHeader from "./StickyHeader";
import { headerStyles } from "./styles";

function Header() {
  const classes = headerStyles();

  const isMobileVersion = useSelector((state) => state.app.isMobile);

  return (
    <header className={classes.header}>
      <div className={classes.headerParts}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div style={{ height: 80 }} />
            {isMobileVersion ? (
              <>
                <AccountLinks />
                <HeaderMobileDrawer />
              </>
            ) : (
              <AccountLinks />
            )}
          </Grid>
        </Container>
      </div>
      {!isMobileVersion && <StickyHeader />}
    </header>
  );
}

export default Header;
