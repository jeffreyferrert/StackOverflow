# StackOverflow

## Description

Stack Overflow is a leading Q&A platform tailored for developers and programmers.
It hosts a diverse and dynamic community where users can post questions, share knowledge, and exchange insights on a wide range of programming topics.
It includes an extensive collection of expert-contributed solutions, code snippets, and best practices,

## Landing Page

Stack Overflow's landing page serves as a gateway to its vast knowledge base. Users can easily find and access relevant programming queries and solutions, fostering a collaborative and supportive community of developers.

![localhost_3000_ height="100"](https://github.com/jeffreyferrert/StackOverflow/assets/60533307/436ddd90-f529-4274-a33a-06324b5a4d70)

## Account Creation

![image](https://github.com/jeffreyferrert/StackOverflow/assets/60533307/fa6bde08-bf3f-4d2d-a898-6a4ba5479f80)

```ruby
class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      errors = {}
      errors[:email] = @user.errors[:email].first if @user.errors[:email].any?
      errors[:username] = @user.errors[:username].first if @user.errors[:username].any?
      errors[:password] = @user.errors[:password].first if @user.errors[:password].any?
      errors[:confirmPassword] = @user.errors[:confirmPassword].first if @user.errors[:confirmPassword].any?
      render json: { errors: errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
```

## Questions Page

Stack Overflow's main page displays a feed of questions and a search bar. Clicking on a question redirects users to the question's show page, which includes details such as the question description, user information, comments, votes, and tags. Users can interact with the page by answering the question or voting on answers.

![image](https://github.com/jeffreyferrert/StackOverflow/assets/60533307/bb473e4a-5d17-4719-ad67-ee3df6c096e6)

```html
<div className="li-container">
      <div className="li-container-left">
        <div className="li-c-vote">{question.votesCounts} votes</div>
        <div className={question.answerCount > 0 ? 'li-c-answer' : ''}>{question.answerCount} answers</div>
        <div className="li-c-views">206 views</div>
      </div>

      <div className="li-container-right">
        <div className="li-c-title">
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        </div>
        <div className="li-c-excerpt">{question.body}</div>

        <div className="li-c-content">
          <div className="li-c-meta">
            <ul>
              <li>c#</li>
              <li>sql</li>
              <li>asp.net-mvc</li>
              <li>sql-update</li>
            </ul>
          </div>

          <div className="li-c-user">
            <img src={`https://ui-avatars.com/api/?name=${question.author}&background=random&format=png`} alt="user_photo" className="li-c-photo" />
            <span />
            <div className="li-c-username">
              <Link to={`/questions?search=${question.userId}`}>
                {question.author}
              </Link>
            </div>
            <span />
            <div className="li-c-lastmodified">
              <span>{question.createdAt !== question.updatedAt ? "Modified" : "Asked"}</span>
              {formatDate(question.updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
```

## Question Show Page

Stack Overflow's question show page provides a comprehensive view of a specific programming inquiry. It presents the question's content, code snippets, and relevant tags. Users can delve into discussions through comments, view answers, and upvote helpful responses.

![image](https://github.com/jeffreyferrert/StackOverflow/assets/60533307/661e8c74-d69b-4392-b393-aad3242780a0)

## Search Bar

Users are able to filter the questions by typing in a word or a phrase and it will be look into the existing tittles or body of the questions. The search bar is shown on every page and redirects the user to a customized questions index with the results.

![image](https://github.com/jeffreyferrert/StackOverflow/assets/60533307/95e07191-5808-4f36-992a-60e6228e9991) 

```html
<form
  onSubmit="{handleSubmit}"
  className="topbar-form {windowWidth < 500 ? hide : ''}"
>
  <input type="text" placeholder="Search..." maxLength="240"
  className="topbar-search" value={input} onChange={(e) =>
  setInput(e.target.value)} />
  <img src="{lupa}" alt="lupa" className="topbar-lupa" />
  <button type="submit" hidden />
</form>
```

## Responsive Version

Stack Overflow's website is designed with responsiveness in mind, ensuring a seamless user experience across various devices and screen sizes.
