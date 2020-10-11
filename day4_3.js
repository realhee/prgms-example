// day4_3
// 문자열 다루기 기본 - 정규식, isNaN(지수형태)

// 1.정규식 표현 방식
function solution(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}

/*
^ : 시작표시(매칭이 처음부터 되어야 함)
$ : 끝표시(문자열 끝에 매칭되어야 함)
[] : 문자열 셋
      [ab][a-z][0-9] 라고 써주면 첫글자는 a또는 b이고 그 다음에 a~z가 나오고 그 뒤에 0~9가 나온다는 뜻..
      []안에서 ^쓰면 그 문자가 아닌것들
* : 0번 이상 반복
+ : 1번 이상 반복
? : 0 또는 1회
{} : 횟수 표시
      [a]{2}이면 aa이고 [a]{2,}이면 a가 2개 이상인거 [a]{2, 4}이면 aa, aaa, aaaa 이다.
\d : 숫자, [0-9]와 같음
\D : 숫자가 아닌 것들 [^0-9]와 같음
| : Or의 뜻
{} : 그룹을 묶어 준다.
. : 뉴라인(\n)제외한 한 문자 (진짜 .을 찍기 위해선 \.으로 표시해야 한다.)


^(caret): 문자열의 시작 / [] 안에서 사용되면 not의 의미
$: 문자열의 끝 \: 이스케이프 문자 
.(point): 어떠한 문자, 공백, 특수문자 상관없이 모든 것을 가리킴 (와일드 카드와 비슷) 
[]: []안의 문자와 통틀어 1 문자로 인식됨 / []안의 문자에 해당되는 어떠한 문자든 찾아냄
-: range
(|): 서브패턴 / 쉽게 말해 or 연산자와 비슷

*/

// 2.isNaN (테스트케이스에 지수형태(1e22)가 추가되면서 실패 케이스 생김)
/*
function solution(s) {
    if(s.length == 4 || s.length == 6) {
        if(!isNaN(s)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}
*/