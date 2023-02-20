import styled from 'styled-components'

const Wrapper = styled.section`
  .userInfo {
  display: flex;
  flex-direction: column;
}
.userInfo .commentsTwo {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.userInfo .commentsTwo .fullName {
  display: flex;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
}

.halfDiv {
  display: flex;
  justify-content: space-between;
}

.replyBtn {
  background-color: transparent;
  border: none;
  color: gray;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  margin: 2px 5px 0px 0px !important;
  width: 70px;
  padding: 5px;
  border-radius: 4px;
  display:none;
}
.replyBtn:hover {
  outline: none;
  background-color: rgba(160, 160, 160, 0.315);
}
.replyBtn:focus {
  outline: 0;
}

.userActions {
  margin-top: 20px;
  
  
}
.userActions .actionsBtn {
  background-color: transparent;
  border: none;
  padding: 6px;
  border-radius: 50%;
  cursor: pointer;
  
}
.userActions .actionsBtn:focus {
  outline: 0;
}
.userActions .actionsBtn:hover {
  outline: none;
  background-color: rgba(123, 123, 123, 0.1);
  border-radius: 50%;
  
}

.userLink {
  display: flex;
  text-decoration: none;
  color: inherit;
  align-items: center;
}
.userLink .imgdefault {
  width: 28px;
  height: 28px;
  border-radius: 14px;
}

.replysection {
  display: flex;
  flex-direction: column;
}

.infoStyle {
  margin-left: 36px;
  font-size: 15px;
}
.infoStyle p {
  margin: 0px;
}

.replyIcon {
  background-image: url("assets/2a0bc34f2fdf6d6b.svg");
  width: 16px;
  height: 13px;
  filter: invert(67%) sepia(0%) saturate(0%) hue-rotate(110deg) brightness(85%) contrast(84%);
  margin-right: 5px;
  position: absolute;
}

.optionIcon {
  //background-image: url("assets/images/3-vertical-dots-icon.svg");
  width: 6px;
  height: 6px;
  filter: invert(24%) sepia(0%) saturate(0%) hue-rotate(155deg) brightness(98%) contrast(93%);
  padding: 7px;
  background-repeat: no-repeat;
  
 
}
.optionIcon:after {
  content: '\\2807';
  font-size: larger;
  }

.szh-menu {
  font-family: sans-serif;
  font-size: 0.925rem;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 6px !important;
  min-width: 7rem;
  left: -70px !important;
  top: -5px !important;
  color: black;
}
.szh-menu .szh-menu__item {
  padding: 5px;
}
.szh-menu .szh-menu__item:hover {
  color: black;
  background-color: #f5f5f5;
}

.react-responsive-modal-modal {
  max-width: 240px !important;
}
.react-responsive-modal-modal h2,
.react-responsive-modal-modal p {
  text-align: center;
}

.deleteBtns {
  display: flex;
  justify-content: center;
  
}

.delete {
  border: none;
  border-radius: 4px;
  background-color: rgb(255, 77, 0);
  padding: 5px 10px;
  color: white;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
}

.cancel {
  border: none;
  border-radius: 4px;
  background-color: rgb(148, 148, 148);
  padding: 5px 10px;
  color: white;
  font-weight: bolder;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
}
.form {
  display: flex;
  background-color: rgb(243, 243, 243);
  padding: 20px;
  border-radius: 8px;
}
.form .userImg {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
}
.form .postComment {
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(24, 24, 24);
  text-decoration: none;
  background-color: transparent;
  margin-left: 6px;
}
.form .postComment:focus {
  outline: none;
  border-bottom: 2px solid rgb(14, 14, 14);
}
.form .postComment::-moz-placeholder {
  margin-top: -2px;
}
.form .postComment:-ms-input-placeholder {
  margin-top: -2px;
}
.form .postComment::placeholder {
  margin-top: -2px;
}
.form .postBtn {
  border: 2px solid rgb(0, 195, 255);
  border-radius: 6px;
  background-color: rgb(0, 195, 255);
  padding: 5px 10px;
  color: white;
  font-weight: bolder;
  margin-left: 15px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 20px;
}
.form .postBtn:hover {
  border: 2px solid rgb(0, 184, 240);
  background-color: rgb(0, 184, 240);
}
.form .cancelBtn {
  border: 2px solid rgb(237, 237, 237);
  border-radius: 8px;
  background-color: rgb(237, 237, 237);
  padding: 5px 10px;
  color: rgb(174, 174, 174);
  font-weight: bolder;
  margin-left: 15px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 20px;
}
.form .cancelBtn:hover {
  border: 2px solid rgb(210, 210, 210);
  background-color: rgb(210, 210, 210);
}

.imgdefault {
  width: 38px;
  height: 38px;
  border-radius: 19px;
}

.hr-style {
  width: 100%;
  border-top: 1px solid;
}

.emoji-input {
  display: flex;
  width: 100%;
  position: relative;
}
.emoji-input .emoji-icon {
  background-image: url("assets/f86f932721d4cf30.svg");
  position: relative;
  width: 24px;
  background-repeat: no-repeat;
  top: 14px;
  cursor: pointer;
}

.emoji-picker-react {
  z-index: 1000;
  position: absolute !important;
  right: -63px;
  top: 50px;
}

.rdw-editor-wrapper {
  width: 100%;
}

.advanced-form {
  padding: 0px;
  flex-direction: column;
}

.rdw-editor-main {
  max-height: 200px;
  overflow: scroll;
}

.advanced-btns {
  width: 100%;
  display: flex;
  margin: 6px 0px 0px 0px;
}

.advanced-border {
  border: 1px solid #e8e8e8;
  padding: 10px;
  border-radius: 10px;
}
.advanced-border .advanced-border:focus-within {
  border: 1px solid #353535;
}

.advanced-post {
  margin-left: unset !important;
}

.advanced-cancel {
  margin-right: 15px;
  margin-left: unset !important;
}

.advanced-overlay {
  display: flex;
  margin: 10px 0px;
  width: 100%;
}

.advanced-input {
  margin-left: 6px;
  width: 100%;
}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

.overlay {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'Noto Sans', sans-serif;
}
.replySection {
  border-left: 1px solid rgb(235, 235, 235);
  margin-left: 25px;
  padding: 0px 0px 0px 15px;
}
.comment-title {
  font-family: 'Noto Sans', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #202020d1;
}
.no-comDiv {
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: #202020d1;
  margin-top: 40px;
}

.signBox {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  background-color: transparent;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
.signBox .signLine {
  margin-top: 5px;
  font-weight: 700;
  color: rgb(156, 156, 156);
  font-size: 17px;
}
.signBox .loginBtn {
  border: 2px solid rgb(0, 195, 255);
  border-radius: 8px;
  background-color: transparent;
  padding: 5px 10px;
  color: rgb(0, 195, 255);
  font-weight: bolder;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
}
.signBox .loginBtn:hover {
  border: 2px solid rgb(0, 183, 238);
  color: rgb(0, 183, 238);
}
.signBox .signBtn {
  border: 2px solid rgb(0, 195, 255);
  border-radius: 8px;
  background-color: rgb(0, 195, 255);
  padding: 5px 10px;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
}
.signBox .signBtn:hover {
  background-color: rgb(0, 183, 238);
  border: 2px solid rgb(0, 183, 238);
}
/* add css module styles here (optional) */
body blockquote {
  border-left: 5px solid #f1f1f1;
  padding-left: 5px;
}
body pre {
  background: #f1f1f1;
  border-radius: 3px;
  padding: 7px 10px;
}
`
export default Wrapper