import React from 'react';
import Tag from './Tag';

const TagsContainer = (props) => (
        <div className="tags-container">
            {props.tags && props.tags.map((tag) => <Tag key={tag} tag={tag}/>)}
        </div>
);

export default TagsContainer;
