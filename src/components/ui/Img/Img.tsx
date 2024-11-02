
type TImg = {
  imgName: string;
  title: string;
  className?: string;
};

function Img({ imgName, title, className }: TImg) {
  return <img className={className} src={imgName} alt={title} loading="lazy"/>;
}

export default Img;
