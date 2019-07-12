<html>
<body>

${value}
${value2!} <!--判断空就附一个默认值-->
<br>
foreach
${list?size}
<br>
<#list list! as colors>
    ${colors}
</#list>
<#--key一定要是字符串，否则遍历出错-->
<#list map?keys as key>
Value: ${key} ${map[key]}
</#list>
${user}


</body>
</html>