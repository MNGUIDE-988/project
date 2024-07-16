let contextPath;

function init(path, shortsNo){
    contextPath = path;
    selectShortsContent({shortsNo : shortsNo}, drawShortsContent);
}

