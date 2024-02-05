import CONSTANTS from '../../constants/Config';
import LABEL from '../../constants/Labels';

export const Header = () => {
    return (
        <header className="app__header">
            <div className="app__logo">
                <span className="app__logo-txt">{LABEL.TITLE}</span>
                <CONSTANTS.LOGO />
            </div>
        </header>
    );
};