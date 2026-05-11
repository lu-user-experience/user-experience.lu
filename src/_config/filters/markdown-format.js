// by Chris Burnell: https://chrisburnell.com/article/some-eleventy-filters/#markdown-format

import markdownParser from 'markdown-it';

const markdown = markdownParser({
    html: true,
    linkify: true,
    typographer: true
});

export const markdownFormat = string => {
  return markdown.render(string);
};
