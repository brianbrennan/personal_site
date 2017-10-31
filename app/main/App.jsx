import React from 'react';
import ReactDOM from 'react-dom';

import './../styles/styles.scss';

export class App extends React.Component {
    render() {
        return (
            <section className="main-home-thing">
                Hello my name is BRIAN BRENNAN and I&apos;m a
                WEB DEVELOPER &amp; WEB DESIGNER and also I do some other things too, like
                WRITE BLOG POSTS or sometimes I even AM A MUSICIAN but most
                of the time I try to just do creative and analytical thingies here in
                BOSTON, MA where I live and work on cool stuff and even though I&apos;m not
                taking clients at the moment I have WORKED ON COOL THINGS IN THE PAST
                but you also might be here to just shoot the shit so you could just try
                GETTING IN TOUCH WITH ME, so long as you&apos;re cool with me getting back to
                you when I can, or maybe you just want to see the SOURCE CODE OF THIS SITE
                because it got posted somewhere and your friend thought it was quirky and now you want
                to make them think that you are cool by liking it too, or maybe you can call me an
                EDGELORD because hey it&apos;s the internet, why not?
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));