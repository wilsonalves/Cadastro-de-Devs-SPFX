import * as React from 'react';
import './styles.css';

function DevItem(props) {

    const { dev } = props;

    return (
        <li className="dev-item">
            <header>
                <img src={dev.AvatarUrl} alt={dev.Name} />
                <div className="user-info">
                    <strong>{dev.Name}</strong>
                    <span>{dev.Techs}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.GithubUserName}`}>Access GitHub profile</a>
        </li>
    );
}

export default DevItem;
