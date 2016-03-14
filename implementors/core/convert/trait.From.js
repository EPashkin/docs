(function() {var implementors = {};
implementors['libc'] = [];implementors['glib'] = ["impl&lt;'a, T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a> + <a class='trait' href='glib/value/trait.SetValueOptional.html' title='glib::value::SetValueOptional'>SetValueOptional</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a T&gt;&gt; for <a class='struct' href='glib/value/struct.Value.html' title='glib::value::Value'>Value</a>","impl&lt;'a, T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a> + <a class='trait' href='glib/value/trait.SetValue.html' title='glib::value::SetValue'>SetValue</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a T&gt; for <a class='struct' href='glib/value/struct.Value.html' title='glib::value::Value'>Value</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='glib/value/struct.TypedValue.html' title='glib::value::TypedValue'>TypedValue</a>&lt;T&gt;&gt; for <a class='struct' href='glib/value/struct.Value.html' title='glib::value::Value'>Value</a>","impl&lt;'a, T: <a class='trait' href='glib/value/trait.FromValueOptional.html' title='glib::value::FromValueOptional'>FromValueOptional</a> + <a class='trait' href='glib/value/trait.SetValueOptional.html' title='glib::value::SetValueOptional'>SetValueOptional</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a T&gt;&gt; for <a class='struct' href='glib/value/struct.TypedValue.html' title='glib::value::TypedValue'>TypedValue</a>&lt;T&gt;","impl&lt;'a, T: <a class='trait' href='glib/value/trait.FromValueOptional.html' title='glib::value::FromValueOptional'>FromValueOptional</a> + <a class='trait' href='glib/value/trait.SetValue.html' title='glib::value::SetValue'>SetValue</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a T&gt; for <a class='struct' href='glib/value/struct.TypedValue.html' title='glib::value::TypedValue'>TypedValue</a>&lt;T&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt;&gt; for <a class='struct' href='glib/value/struct.TypedValue.html' title='glib::value::TypedValue'>TypedValue</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='glib/value/struct.TypedValue.html' title='glib::value::TypedValue'>TypedValue</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt;",];implementors['gtk'] = ["impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a T&gt;&gt; for <a class='struct' href='gtk/struct.Value.html' title='gtk::Value'>Value</a> <span class='where'>where T: <a class='trait' href='glib/value/trait.SetValueOptional.html' title='glib::value::SetValueOptional'>SetValueOptional</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a T&gt; for <a class='struct' href='gtk/struct.Value.html' title='gtk::Value'>Value</a> <span class='where'>where T: <a class='trait' href='glib/value/trait.SetValue.html' title='glib::value::SetValue'>SetValue</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='gtk/struct.TypedValue.html' title='gtk::TypedValue'>TypedValue</a>&lt;T&gt;&gt; for <a class='struct' href='gtk/struct.Value.html' title='gtk::Value'>Value</a>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a T&gt;&gt; for <a class='struct' href='gtk/struct.TypedValue.html' title='gtk::TypedValue'>TypedValue</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='glib/value/trait.FromValueOptional.html' title='glib::value::FromValueOptional'>FromValueOptional</a> + <a class='trait' href='glib/value/trait.SetValueOptional.html' title='glib::value::SetValueOptional'>SetValueOptional</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a T&gt; for <a class='struct' href='gtk/struct.TypedValue.html' title='gtk::TypedValue'>TypedValue</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='glib/value/trait.FromValueOptional.html' title='glib::value::FromValueOptional'>FromValueOptional</a> + <a class='trait' href='glib/value/trait.SetValue.html' title='glib::value::SetValue'>SetValue</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='enum' href='https://doc.rust-lang.org/nightly/core/option/enum.Option.html' title='core::option::Option'>Option</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt;&gt; for <a class='struct' href='gtk/struct.TypedValue.html' title='gtk::TypedValue'>TypedValue</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='gtk/struct.TypedValue.html' title='gtk::TypedValue'>TypedValue</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()