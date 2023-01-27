import TopUserInfoBar from "./top-user-info-bar.component";

const TopUserInfoBarContainer = () => {
  const userName = "Christian Kätkä";

  return (
    <>
      <TopUserInfoBar userName={userName}></TopUserInfoBar>
    </>
  );
};

export default TopUserInfoBarContainer;
