import _ from 'lodash';
import React, { Suspense, useState } from 'react';
import Input from 'src/components/input';
import {
  SAMPLE_DATA,
  SAMPLE_INPUT_PROPS,
} from 'src/modules/comments/constants';
import { ChildrenInterface } from 'src/modules/comments/types';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

const ComponentGenerator = React.lazy(
  () => import('src/modules/comments/ComponentGenerator')
);
export const Comments = () => {
  const [data, setData] = useState(SAMPLE_DATA);
  const addReply = (treeId: string) => {
    let localData = _.cloneDeep(data);
    const arr = treeId.split('/');
    arr.splice(0, 1);
    const node = recursiveNavigation(localData, arr);
    node.reply = {
      id: uuidv4(),
      imgSrc: 'https://via.placeholder.com/150/92c952',
    };
    setData(localData);
  };

  const recursiveNavigation: any = (
    elems: Array<ChildrenInterface>,
    arrIds: Array<string>
  ) => {
    const id = arrIds[0];
    arrIds.splice(0, 1);
    const node = elems.find((elem) => elem.id === id);
    if (arrIds.length && node && node.children) {
      return recursiveNavigation(node.children, arrIds);
    } else {
      return node;
    }
  };
  return (
    <div className="container">
      <Input {...SAMPLE_INPUT_PROPS} />
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentGenerator data={data} addReply={addReply} />
      </Suspense>
    </div>
  );
};

{/* <div>
<Comment {...SAMPLE_COMMENT_PROP} />
<div className="child-comment">
<Comment {...SAMPLE_COMMENT_PROP} />
<Input {...SAMPLE_INPUT_PROPS} reply={true} placeholder="Reply"/>
</div>
</div>
<div>
<Comment {...SAMPLE_COMMENT_PROP} />
</div>  */}
