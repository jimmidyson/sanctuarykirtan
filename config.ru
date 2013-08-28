#!/usr/bin/env rackup
# encoding: utf-8

# This file can be used to start Padrino,
# just execute it from the command line.

require File.expand_path("../config/boot.rb", __FILE__)

if Padrino.env == :development
  require 'rack-livereload'

  use Rack::LiveReload
end

run Padrino.application
