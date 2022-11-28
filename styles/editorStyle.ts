import { css } from "styled-components";
import { palette } from "./palette";
import "@toast-ui/editor/dist/toastui-editor.css";

export const editorStyle = css`
  .toastui-editor-defaultUI-toolbar {
  }
  .toastui-editor-md-container,
  .toastui-editor-md-vertical-style {
    background-color: white;
  }
  .toastui-editor-contents {
    font-size: 16px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border: 0px;
      margin-bottom: 25px;
      margin-top: 50px;
      font-weight: bold;
    }
    h1 {
      font-size: 44px;
      margin-bottom: 35px;
    }
    h2 {
      font-size: 38px;
    }
    h3 {
      font-size: 34px;
    }
    h4 {
      font-size: 30px;
    }
    h5 {
      font-size: 26px;
    }
    h6 {
      font-size: 22px;
    }

    p {
      font-size: 1.125rem;
      margin: 10px 0px;
      line-height: 160%;
    }

    th {
      background-color: #f2f4f6;
      font-weight: bold;
      color: #4e5968;
      p {
        color: #4e5968;
      }
    }
    img {
      width: 100%;
    }
    blockquote {
      padding: 16px 24px;
      border-left: 6px solid ${palette.main};
      line-height: 19px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .toastui-editor-main {
    .toastui-editor-ww-mode {
      .toastui-editor {
      }
    }
  }
  .toastui-editor-ww-container {
    .toastui-editor {
      display: flex;
      justify-content: center;
      .toastui-editor-contents {
        width: 980px;
        padding: 18px 0px;
      }
    }
  }
`;
