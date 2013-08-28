# Defines our constants
PADRINO_ENV  = ENV['PADRINO_ENV'] ||= ENV['RACK_ENV'] ||= 'development'  unless defined?(PADRINO_ENV)
PADRINO_ROOT = File.expand_path('../..', __FILE__) unless defined?(PADRINO_ROOT)

# Load our dependencies
require 'rubygems' unless defined?(Gem)
require 'bundler/setup'
Bundler.require(:default, PADRINO_ENV)

##
# ## Enable devel logging
#
# Padrino::Logger::Config[:development][:log_level]  = :devel
# Padrino::Logger::Config[:development][:log_static] = true
#
# ## Configure your I18n
#
# I18n.default_locale = :en
#
# ## Configure your HTML5 data helpers
#
# Padrino::Helpers::TagHelpers::DATA_ATTRIBUTES.push(:dialog)
# text_field :foo, :dialog => true
# Generates: <input type="text" data-dialog="true" name="foo" />
#
# ## Add helpers to mailer
#
# Mail::Message.class_eval do
#   include Padrino::Helpers::NumberHelpers
#   include Padrino::Helpers::TranslationHelpers
# end

##
# Add your before (RE)load hooks here
#
Padrino.before_load do
end

##
# Add your after (RE)load hooks here
#
Padrino.after_load do
  DataMapper.finalize
end

module Padrino
  module Admin
    module AccessControl
      class << self
        def registered(app)
          app.set :session_id, "_padrino_#{File.basename(Padrino.root)}_#{app.app_name}".to_sym unless app.respond_to?(:session_id)
          app.set :admin_model, 'Account' unless app.respond_to?(:admin_model)
          app.helpers Padrino::Admin::Helpers::AuthenticationHelpers
          app.helpers Padrino::Admin::Helpers::ViewHelpers
          app.before { login_required }
          app.send(:cattr_accessor, :access_control)
          app.send(:access_control=, Padrino::Admin::AccessControl::Base.new)
        end
        alias :included :registered
      end
    end
  end
end


Padrino.load!
