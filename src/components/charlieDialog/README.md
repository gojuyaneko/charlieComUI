## charlieDialog 使用手册
    <charlieDialog
      :videoUrl="videoUrl"
      :asideImg="asideImg"
      :diaTitle="diaTitle"
      @getContent="getContent"
      :menuData="menuData"
      :diaContent="diaContent"
      :diaBtnData="diaBtnData"
    >
    </charlieDialog>


参数名称 | 说明（详细格式见lightandnight） | 类型 
---- | ---- | ----
videoUrl | 观看视频按钮跳转链接 | String
asideImg | 左侧图片url | String
diaTitle | 右侧上方标题图片url | String
menuData | 目录选择项 | Array
diaContent | 文本内容 | Array
diaBtnData | 选择项按钮内容 | Array


方法名称 | 说明 | 回调参数
---- | ---- | ----
getContent | 目录选中小节触发事件 | 选中小节名称（如 7-13） 
