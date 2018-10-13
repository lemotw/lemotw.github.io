title: Linux Basis 
output: index.html
progress: true

--
# Linux Basis
## lemotw
--
# [Unix](https://zh.wikipedia.org/wiki/UNIX), [Linux](https://zh.wikipedia.org/wiki/UNIX) 傻傻分不清楚
--
### Unix
* 1973 Unix 誕生
	* 過程有把B語言改進成現在C語言
	* 1977 BSD 塔拉
	* 1979 System V 版權聲明QQ
--
### To Linux
* 1984 Minix
	* 1984 -2 GNU基金會
		* GCC
		* glibc
		* bash
* 1988 X Windows System
* 1991 Linux
--
# Install
## [Arch](https://hackmd.io/_9YaDfUPRmuAMA328n2hJw)比較難，其他就燒iso按下一步
--
### File system
* pwd
	* 顯示所在現在目錄
* ls
	* 顯示現在目錄下的檔案
* cd
	* 切換目錄
--
### 檔案操作
* cp
	* 複製檔案
* mv
	* 移動檔案或改檔名
* mkdir
	* 創一個資料夾
* rm
	* 刪除檔案
--
### Misc
* grep 尋找檔案中的字串
* echo 輸出字串
* cat 列印檔案內容
* clear 清除螢幕
--
# stdin / stdout
--
### argc/argv in C lang
```C
int main(int argc, const char *argv[])
```
* argc 是只有幾個輸入
* argv 是輸入的陣列字串
--
### 流水線、箭頭....etc
* | 會把前面的輸出餵給後面
```shell
ls | grep txt
```
* \> 寫進去
```shell
echo "hello" > write.txt
```
* \>\> 加到下一行
```shell
echo "test" >> write.txt
```
--
# Shell Script
## 有點像Bat
--
# 變數
## var=123
## let var=var+2
## echo $var
--
### if/else
```shell
if [ "$str" = "234"];then
	echo "str is 123"
fi

if [ "$str" = "123" ];then
    echo "str is 123"
else
    echo "str is other"
fi
```
* 空格以及雙引號都要注意
* 範圍也和其他語言不太一樣
--
### if的更多判別
* -d file 判斷file 是目錄回傳true
* -f file 判斷file 是檔案回傳true
* -r file 判斷file 可讀回傳true
* -s file 判斷file 的體積大於0(不是空檔案)回傳true
* -w file 判斷file 可寫入回傳true
* -x file 判斷file 可執行回傳true
* $str1 = str2 判斷$str1與$str2字串是否相同
* $str1 != $str2 判斷$str1與$str2是否不同(字串) 
--
### if的更多判別 Part2
* -n $str 當$str1不是null,回傳true
* -z $str 當$str1是null,回傳true
* var1 -eq var2	判斷是否等於(數字)
* var1 -ne var2	判斷是否不等於(數字)
* var1 -gt var2	判斷是否大於(數字)
* var1 -ge var2	判斷是否大於等於(數字)
* var1 -lt var2	判斷是否小於(數字)
* var1 -le var2	判斷是否小於等於(數字)
--
### for
```shell
for var in 1 2 3 D;do
	echo "var is $var"
done

for var in {1..10};do
	echo "var is $var"
done
```
* in後面是一串清單
* {1..10}會幫你作一個1到10的清單
--
### while迴圈
```shell
let var=1
let hun=100
while [ $var -lt $hun ];do
	echo $var
	let var=var+1
done
```
* 這邊while後面是跟if同樣的判斷式
* 然後注意如過用-lt兩參數要為數字
--
### function
```shell
function printnum(){
	echo "第一個參數$1"
	echo "第二個參數$2"
}

printnum 1 第二參數 
```
--
### 強大的sed
* -n 只會把處理完的結果輸出到tty
* -e 允許多行修改的指令
* -i 改完的結果會寫回原本檔案
--
### sed 指令
* a 後面追加
* c 行替換
* i 前面插入
* d 刪除特定行數
* s 替換(這個真的很好用)
---
# Any Question?

<br /><br /><br />
<div align="center">
  <img style="width:100px;" src="by-sa.png" />
</div>
<h2 style="font-size: 18px">
本投影片採用<a href="http://creativecommons.org/licenses/by-sa/3.0/tw/" target="_blank">創用 CC「姓名標示—相同方式分享 3.0 台灣」授權條款</a>
</h2>
