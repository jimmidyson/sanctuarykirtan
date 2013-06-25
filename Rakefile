task :default => [:start]

namespace :sinatra do
  desc 'Start Sinatra app for development'
  task :start do
    system 'rackup -p 4567'
  end
end

namespace :grunt do
  desc 'Start Grunt server for development'
  task :start do
    Dir.chdir('frontend') do
        system 'grunt server'
    end
  end
end

desc 'Start everything'
multitask :start => [ 'sinatra:start', 'grunt:start' ]
