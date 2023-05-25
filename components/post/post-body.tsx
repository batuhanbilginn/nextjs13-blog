import parse from "html-react-parser";

const PostBody = ({ body }: { body: string }) => {
  const getParsedHTML = (body: string) => {
    return parse(body);
  };

  return <div className="rich-text">{getParsedHTML(body)}</div>;
};

export default PostBody;
