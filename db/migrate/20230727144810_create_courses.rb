class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    drop_table :courses
    create_table :courses do |t|
      t.string :short_name
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
