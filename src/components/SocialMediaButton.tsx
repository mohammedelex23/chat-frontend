import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SocialMediaButton(props: { icon: IconProp, color: String }) {
  return (
    <a href="#"><i className="block mx-2 cursor-pointer bg-lightBackground px-7 py-3">
      <FontAwesomeIcon className={`${props.color}`} icon={props.icon} />
    </i></a>
  );
}
