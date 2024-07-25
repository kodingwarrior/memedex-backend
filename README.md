
# Memedex : Database of personal meme collection.

## 기술 스택

* Python >= 3.11
* Django 4.2.6
  * django-ninja for API server
  * django-ninja-jwt for authentication
* Vue 3 (thanks to django-importmap)
* Postgresql 

## 사용 방법 

### Django 개발 환경 세팅 

1. poetry 설치 - `pip install poetry`
2. 패키지 설치 - `poetry install`
3. 데이터베이스 마이그레이션 - `poetry run python manage.py migrate`
4. Django 서버 프로세스를 띄울때는 `poetry run python manage.py runserver`, tailwindcss dev server를 띄울때는 `poetry run python manage.py tailwind` 커맨드를 사용합니다.

### Vue 개발 환경 세팅 

프로젝트 루트 디렉토리에서 `npm install` 커맨드로 JS 모듈들을 설치해주면 됩니다.

`package.json`은 **language server의 자동완성을 보조**해주기 위한 목적으로 사용되며, importmap에는 반양이 되지 않습니다. importmap에 포함되는 외부 라이브러리 의존성을 명시하는건 `pyproject.toml`을 참고해주세요.

`jsconfig.json`도 language server의 자동완성 기능을 보조해주기 위해 사용되는데, 외부 라이브러리의 import 뿐만 아니라 모듈 단위로 분리가 되어 있는 static 파일을 import할 때 alias를 지정하기 위해서 사용됩니다. (ex. `memedex/static/memedex/index.js` -> `memedex/index.js`)


## 배포

### Using kamal

Just run `Kamal deploy`

[https://kamal-deploy.org/](https://kamal-deploy.org/)




