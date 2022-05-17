import './notes-app-wrapper.component.scss';

const NotesAppWrapper = (props) => {
  // chilidren on sama ku ng-content
  return <main>{props.children}</main>;
};

export default NotesAppWrapper;
