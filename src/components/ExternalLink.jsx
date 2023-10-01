const ExternalLink = ({
  link,
  icon = null,
  cssClass = "",
  isTargetBlank = true
}) => {

  return (
    <a
      href={link?.href}
      target={isTargetBlank ? "_blank" : null}
      rel="nofollow noopener noreferrer"
      referrerPolicy="no-referrer"
      className={cssClass ? cssClass : null}
    >
      {link?.text && link?.text}
      {icon && icon}
    </a>
  )
}

export default ExternalLink