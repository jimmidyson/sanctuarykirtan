Sanctuarykirtan::App.controllers :auth do

  get :logout do
    set_current_account(nil)
    session.clear
    redirect url('/')
  end

  get :auth, :map => '/auth/facebook/callback' do
    auth    = request.env['omniauth.auth']
    account = Account.first_or_create(
                {
                  :provider => auth['provider'],
                  :email    => auth['info']['email']
                },
                {
                  :provider => auth['provider'],
                  :email    => auth['info']['email'],
                  :role     => 'users'
                }
    )
    account.update(:name => auth['info']['name'])
    set_current_account(account)
    redirect request.env['omniauth.origin'] || '/'
  end

end
