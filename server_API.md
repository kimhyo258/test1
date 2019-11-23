# Hosmed server interface
Hosmed-server의 인터페이스 명세
## API 상세 정보
* 모든 요청 메시지는 `GET` 메서드로 요청.
* 응답 메시지의 각 요소는 `\n`으로 구분되며, 각 필드는 `////`로 구분됨.
---
### `/hosmed/getmyinfo` : 나의 정보
* 인자 없음. 로그인 세션에서 자동 추출
응답 메시지 형식
```text
응답 필드     > 이름////고유번호////프로필사진_주소
```
---
### `/hosmed/getdruginfo` : 의약품 정보
* param1 : `type`
    * `basic` : 기본 정보 (생김새 등)
    * `toxic` : 독성 정보
    * `side_effect` : 부작용 정보
    * `usage` : 치료할 수 있는 증상
* param2 : `drug_name`
    * 검색할 의약품 이름

응답 메시지 형식
```text
응답 개수     > 2
응답 필드     > 약 분류////의약품종류////이름////제조사////생김새////사진////승인날짜
응답 데이터   > 응답-1
응답 데이터   > 응답-2
```
---
### `/hosmed/gethospitalinfo` : 병원 정보
* param1 : `type`
    * `basic` : 기본 정보
    * `detail` : 최근 상위 5개의 치료 항목
* param2-1 : `hospital_name`
    * 검색할 병원 이름
    * `type`이 `basic`일때 사용
* param2-2 : `hospital_id`
    * 검색할 병원의 식별자
    * `type`이 `detail`일때 사용
* param3 : `xpos`
    * x 좌표 (경도, 소수점 15자리까지, 대한민국 123~132)
* param3 : `ypos`
    * y 좌표 (위도, 소수점 15자리까지, 대한민국 30~39)
* param3 : `radius`
    * 반경 (단위: m)

> 요청의 조합 예시
> 1. 이름으로만 검색 : `/hosmed/gethospitalinfo?type=basic&hospital_name=상쾌한이비인후과`  
> 해당 경우 `거리(m)`필드의 항목은 `null`임
> 2. 이름과 반경으로 검색 : `/hosmed/gethospitalinfo?type=basic&hospital_name=상쾌한이비인후과&xpos=127.0550557&ypos=36.7724481&radius=100`
> 3. 반경으로만 검색 : `/hosmed/gethospitalinfo?type=basic&xpos=127.0550557&ypos=36.7724481&radius=100`
> 4. 병원의 최상위 진료항목 검색 (응답 형식 다름) : `/hosmed/gethospitalinfo?type=detail&hospital_id=JDQ4MTYyMiM2MSMkMiMkMiMkMDAkMzgxNzAyIzQxIyQxIyQ3IyQ4MiQyNjEwMDIjNDEjJDEjJDQjJDgz`


응답 메시지 형식 (최대 100개)
```text
응답 개수     > 2
응답 필드     > 거리(m)////이름////구분////개업일////의사수////전화번호////주소////xpos////ypos////식별자
응답 데이터   > 응답-1
응답 데이터   > 응답-2
```
---
### `/hosmed/getdrugstoreinfo` : 약국 정보
* param1 : `type`
    * `basic` : 기본 정보
* param2-1 : `drugstore_name`
    * 검색할 약국 이름
* param3 : `xpos`
    * x 좌표 (경도, 소수점 15자리까지, 대한민국 123~132)
* param3 : `ypos`
    * y 좌표 (위도, 소수점 15자리까지, 대한민국 30~39)
* param3 : `radius`
    * 반경 (단위: m)
    
> 요청의 조합 예시
> 1. 이름으로만 검색 : `/hosmed/getdrugstoreinfo?type=basic&drugstore_name=건강한약국`  
> 해당 경우 `거리(m)`필드의 항목은 `null`임
> 2. 이름과 반경으로 검색 : `/hosmed/getdrugstoreinfo?type=basic&drugstore_name=건강한약국&xpos=127.0550557&ypos=36.7724481&radius=100`
> 3. 반경으로만 검색 : `/hosmed/getdrugstoreinfo?type=basic&xpos=127.0550557&ypos=36.7724481&radius=100`


응답 메시지 형식 (최대 100개)
```text
응답 개수     > 2
응답 필드     > 거리(m)////이름////구분////개업일////전화번호////주소////xpos////ypos////식별자
응답 데이터   > 응답-1
응답 데이터   > 응답-2
```
