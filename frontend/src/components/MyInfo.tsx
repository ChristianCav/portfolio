import { SiGithub, SiLinkedin } from 'react-icons/si';
import SplitText from '../animations/SplitText';
import FadeContent from '../animations/FadeContent';

const MyInfo = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center pt-52">
      <SplitText
        text="Hi, I'm Christian Cavaliere"
        className="text-3xl font-semibold text-center text-white"
        delay={30}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <FadeContent className="">
        <p className="text-gray-300 text-lg">CS Student @ UofT</p>
        <p className="text-gray-300 text-lg">
          I'm an aspiring full-stack software engineer
        </p>
        <div className="icons pt-2">
          <div className="flex flex-row gap-x-3">
            <a
              href="https://github.com/ChristianCav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-cavaliere-027193375/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={18} />
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default MyInfo;
