import { FooterContainer, FooterText } from "./FooterStyles"

const Footer = () => {
  const fecha = new Date();
  

  return (
    <FooterContainer>
      <FooterText>Page created by Nicks William | Año: {fecha.getFullYear()}</FooterText>
    </FooterContainer>
  )
}
export default Footer