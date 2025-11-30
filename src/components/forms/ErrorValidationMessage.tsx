type Props = {
  message: string;
};
export default function ErrorValidationMessage({ message }: Props) {
  return <p className="text-red-500 text-sm">* {message} </p>;
}
