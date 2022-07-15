import Social from "./social";
import ImageX from "./image-x";

export default function ProfileInfo({ member, avatar, className }) {
  return (
    <div className={className}>
      {!avatar && (
        <div className="flex flex-col items-center lg:items-start">
          <a className="relative flex-shrink-0 w-72 h-72 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-4">
            <ImageX
              src={member.image}
              alt={member.fullname}
              layout="fill"
              objectFit="cover"
            />
          </a>
          <div className="flex flex-col">
            <h2 className="text-center lg:text-left pb-2">
              <span className="font-bold text-2xl">{member.fullname}</span>
            </h2>
            <h4 className="text-center lg:text-left pb-2">
              <span className="text-gray-500 dark:text-gray-400">
                {member.title}
              </span>
            </h4>
            <h4 className="text-center lg:text-left pb-4">
              <span className="text-gray-500 dark:text-gray-400">
                {member.location}
              </span>
            </h4>
            <div className="flex flex-row justify-center lg:justify-start items-center text-sm space-x-4 text-gray-500">
              {member.twitter && (
                <Social type="twitter" link={member.twitter} />
              )}
              {member.github && <Social type="github" link={member.github} />}
              {member.linkedin && (
                <Social type="linkedin" link={member.linkedin} />
              )}
              {member.medium && <Social type="medium" link={member.medium} />}
            </div>
          </div>
        </div>
      )}
      {avatar && (
        <div className="flex flex-col items-center lg:items-start">
        <a className="relative w-72 min-h-screen_ overflow-visible border-gray-200 dark:border-gray-700">
          <ImageX
            src={member.avatar}
            alt={member.fullname}
            width={Math.round(1001 / 5)}
            height={Math.round(3409 / 5)}
            // layout="fill"
            // objectFit="cover"
          />
        </a>
      </div>
      )}
    </div>
  );
}
