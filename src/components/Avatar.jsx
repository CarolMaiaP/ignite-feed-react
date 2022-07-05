import styles from './Avatar.module.css';

export function Avatar(props){
  const hasBorder = props.hasBorder !== false;
  return(
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar } src={props.src}/>
  )
}