import GitHubButton from 'react-github-btn'

export default function Footer () {
    return (
        <footer>
            <div className="github">
                <h4>Github</h4>
                <GitHubButton href="https://github.com/AbeGue02/fork_yeah" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" aria-label="Star AbeGue02/fork_yeah on GitHub">Star</GitHubButton>
            </div>
            <div className="github">
                <h4>Abraham Guerrero</h4>
                <ul>
                    <li><GitHubButton href="https://github.com/AbeGue02" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @AbeGue02 on GitHub">Follow @AbeGue02</GitHubButton></li>
                    <li><a href="https://www.linkedin.com/in/abrahamdguerrero/">LinkedIn</a></li>
                </ul>
            </div>
            <div className="github">
                <h4>Felix Man</h4>
                <ul>
                    <li><GitHubButton href="https://github.com/felixm126" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @felixm126 on GitHub">Follow @felixm126</GitHubButton></li>
                    <li><a href="https://www.linkedin.com/in/felix-man/">LinkedIn</a></li>
                </ul>
            </div>
            <div className="github">
                <h4>Daisy Ban</h4>
                <ul>
                    <li><GitHubButton href="https://github.com/toddlf705" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @toddlf705 on GitHub">Follow @toddlf705</GitHubButton></li>
                    <li><a href="https://www.linkedin.com/in/daisy-ban/">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
} 