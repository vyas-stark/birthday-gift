# birthday_gift

A cinematic, mobile-first birthday storybook for Sruti, built with plain HTML, CSS, and JavaScript. Every scene has its own HTML, CSS, and JS files.

## Structure

```text
birthday_gift/
├── loading_page/      loading.html, loading.css, loading.js
├── login_page/        login.html, login.css, login.js
├── book_opening/      book.html, book.css, book.js
├── chapter_01/        chapter1.html, chapter1.css, chapter1.js
├── chapter_02/        chapter2.html, chapter2.css, chapter2.js
├── chapter_03/        chapter3.html, chapter3.css, chapter3.js
├── agreement/         agreement.html, agreement.css, agreement.js
├── letter/            letter.html, letter.css, letter.js
└── assets/            images/, audio/, fonts/
```

## Edit personal content

Each page's JavaScript starts with `EDIT YOUR PERSONAL CONTENT HERE`.

- Login question, password, welcome text, and wrong-answer messages: `login_page/login.js`
- Book title and subtitle: `book_opening/book.js`
- Chapter titles and page text: `chapter_01/chapter1.js`, `chapter_02/chapter2.js`, `chapter_03/chapter3.js`
- Agreement terms and cancel messages: `agreement/agreement.js`
- Final letter and ending text: `letter/letter.js`

The password is changed in `login_page/login.js`, in `loginContent.password`. Matching is case-insensitive and trims whitespace.

## Run in VS Code

Open this folder in VS Code. Install the **Live Server** extension, right-click `loading_page/loading.html`, and choose **Open with Live Server**. The browser will open at the first scene.

A local server is recommended because it makes relative navigation and mobile testing consistent. No build step or package installation is required.

## Test on mobile

1. Start Live Server on the computer.
2. Find the computer's local IPv4 address with `ipconfig`.
3. On the phone, connected to the same Wi-Fi, open `http://YOUR-IP:5500/loading_page/loading.html`.
4. Test the entire flow, including the cancel button and signature pad in portrait mode.

Replace the bracketed placeholders only after adding the real personal story. Do not place private content in image or audio metadata.
