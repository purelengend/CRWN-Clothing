import { withRouter } from 'react-router-dom';
import { MenuItemContainer, BackgroundImage, ContentContainer } from './menu-item.styles';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
        onClick={() => history.push(`${match.url}${linkUrl}`)}        
        size={size}
    >
        <BackgroundImage imageUrl={imageUrl}>
        </BackgroundImage>
        <ContentContainer>
            <h1>{title.toUpperCase()}</h1>
            <span>SHOP NOW</span>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);