import React from 'react';
import _ from 'lodash';

import {markdownify, Link, safePrefix, classNames, toUrl} from '../utils';

export default class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="inner">
                    <h2>{this.props.pageContext.frontmatter.banner.title}</h2>
                    {this.props.pageContext.frontmatter.banner.subtitle && 
                        markdownify(this.props.pageContext.frontmatter.banner.subtitle)
                    }
                    {this.props.pageContext.frontmatter.banner.actions && 
                        <ul className="actions special">
                            {_.map(this.props.pageContext.frontmatter.banner.actions, (action, action_idx) => (
                                <li key={action_idx}><Link to={(action.url.startsWith('#') ? action.url : safePrefix(action.url))} className={classNames('button', {'primary': action.is_primary}, {'scrolly': action.is_scrolly})}>{action.label}</Link></li>
                            ))}
                        </ul>
                    }
                </div>
                {this.props.pageContext.frontmatter.banner.bottom_link && 
                    <Link to={(this.props.pageContext.frontmatter.banner.bottom_link.url.startsWith('#') ? this.props.pageContext.frontmatter.banner.bottom_link.url : safePrefix(toUrl(this.props.pageContext.pages, this.props.pageContext.frontmatter.banner.bottom_link.url)))} className={classNames({'more': this.props.pageContext.frontmatter.banner.bottom_link.has_arrow}, {'scrolly': this.props.pageContext.frontmatter.banner.bottom_link.is_scrolly})}>{this.props.pageContext.frontmatter.banner.bottom_link.label}</Link>
                }
            </section>
        );
    }
}
